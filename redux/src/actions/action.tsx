import List from "../components/List";

export const LIST_ACTIONS = {
    ADD_LIST: 'listActions.AddList',
    RENDER_LIST:'listActions.RenderList'
};

export function addList(list:List) {
    return({
        list,
        type: LIST_ACTIONS.ADD_LIST
    });
};

export function renderList() {
    return ({
        type: LIST_ACTIONS.RENDER_LIST
    })
;}
