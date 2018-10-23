import dispatcher from "../Dispatcher";

import List from "../components/List";

export const LIST_ACTIONS = {
    ADD_LIST: 'listActions.AddList'
};

export function addList(list:List) {
    dispatcher.dispatch({
        type: LIST_ACTIONS.ADD_LIST,
        value: list
    })
}
