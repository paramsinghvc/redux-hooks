import {
  useEffect,
  useContext,
  useState,
  createContext,
  Context,
  useCallback,
  useRef
} from "react";
import {
  Dispatch,
  Action,
  Store,
  ActionCreatorsMapObject,
  bindActionCreators
} from "redux";

import ProviderComponent from "./Provider";
import { shallowEqual } from "./utils";

export type MapStateToProps<State, TStateProps, TOwnProps> = (
  state: State,
  ownProps?: TOwnProps
) => TStateProps;

export type MapDispatchToProps<TDispatchProps, TOwnProps> = (
  dispatch: Dispatch<Action>,
  ownProps?: TOwnProps
) => TDispatchProps;

let context: Context<Store>;

export const createStoreContext = <RootState>() => {
  context = createContext<Store<RootState>>(null as any);
  const Provider = ProviderComponent(context);
  return {
    context,
    Provider
  };
};

export function areDispatchActionsMap<TDispatchProps, TOwnProps>(
  dispatchProps: MapDispatchToProps<TDispatchProps, TOwnProps> | TDispatchProps
): dispatchProps is TDispatchProps {
  return typeof dispatchProps !== "function";
}

const useRedux = <
  State = {},
  TStateProps = {},
  TDispatchProps extends ActionCreatorsMapObject<any> = {},
  TOwnProps = {}
>(
  mapStateToProps: MapStateToProps<State, TStateProps, TOwnProps>,
  mapDispatchToProps:
    | MapDispatchToProps<TDispatchProps, TOwnProps>
    | TDispatchProps,
  ownProps?: TOwnProps
) => {
  /* Getting the reference of the store from the passed in context in the <Provider/> */
  const store = <any>useContext(context);
  /* If store is not supplied in the <Provider/>, then throw a Missing Store error */
  if (!store) {
    throw new Error("Store has not been provided in the <Provider />");
  }
  const { getState, dispatch, subscribe } = store;
  const state = getState();
  /* Creating memoized Callbacks for mapStateToProps and mapDispatchToProps to prevent
   *  multiple copies of them being created on every render
   */
  const memoizedMapStateToProps = useCallback(mapStateToProps, []);
  const memoizedMapDispatchToProps = useCallback(
    areDispatchActionsMap(mapDispatchToProps)
      ? () => bindActionCreators(mapDispatchToProps, dispatch)
      : mapDispatchToProps,
    []
  );
  /** Maintaining a reference of the mappedState across re-renders */
  const mappedState = useRef<TStateProps>();
  const mappedDispatchProps = useRef(
    memoizedMapDispatchToProps(dispatch, ownProps)
  );
  /* A way to trigger render on mappedState change */
  const [, setMappedState] = useState(mappedState.current);
  /**
   * Subscribing the store only once the component where useRedux is being used is mounted.
   * UnSubscribing & Subscribing again in case the store is changed in the context.
   * Returning cleanup handler in order to unsubscribe from the subscription in case of unmount
   */
  useEffect(() => {
    const unsubscribe = subscribe(() => {
      const nextDerivedState = memoizedMapStateToProps(getState());
      /**
       * Checking whether the new derived/mapped state is not in sync with the previously mapped state
       * and only then updating the UI by calling setMappedState while updating our reference to the
       * current mappedState.
       */
      if (!shallowEqual(nextDerivedState, mappedState.current)) {
        mappedState.current = nextDerivedState;
        setMappedState(nextDerivedState);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [store]);
  /* Returning both the mappedStateProps and mappedDispatchProps in the end */
  return {
    ...(mappedState.current
      ? mappedState.current
      : memoizedMapStateToProps(state, ownProps)),
    ...mappedDispatchProps.current
  };
};

export default useRedux;
