import { Context } from "react";
import { Dispatch, Action, Store, ActionCreatorsMapObject } from "redux";
export declare type MapStateToProps<State, TStateProps, TOwnProps> = (state: State, ownProps?: TOwnProps) => TStateProps;
export declare type MapDispatchToProps<TDispatchProps, TOwnProps> = (dispatch: Dispatch<Action>, ownProps?: TOwnProps) => TDispatchProps;
export declare const createStoreContext: <RootState>() => {
    context: Context<Store<any, import("redux").AnyAction>>;
    Provider: ({ store, children }: {
        store: any;
        children: any;
    }) => JSX.Element;
};
export declare function areDispatchActionsMap<TDispatchProps, TOwnProps>(dispatchProps: MapDispatchToProps<TDispatchProps, TOwnProps> | TDispatchProps): dispatchProps is TDispatchProps;
declare const useRedux: <State = {}, TStateProps = {}, TDispatchProps extends ActionCreatorsMapObject<any> = {}, TOwnProps = {}>(mapStateToProps: MapStateToProps<State, TStateProps, TOwnProps>, mapDispatchToProps: TDispatchProps | MapDispatchToProps<TDispatchProps, TOwnProps>, ownProps?: TOwnProps | undefined) => TStateProps & TDispatchProps;
export default useRedux;
