import { ActionType } from '../action-types';


interface MoveCellAction {
    type: ActionType.MOVE_CELL;
}

interface DeleteCellAction {
    type: ActionType.DELETE_CELL;
}

interface InsertCellBeforeAction {
    TYPE: ActionType.INSERT_CELL_AFTER
}

interface UpdateCellAction {
    type: ActionType.UPDATE_CELL;
}

interface BundleStartAction {
    type: ActionType.BUNDLE_START;
}