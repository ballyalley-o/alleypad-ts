import { ActionType } from '../action-types';
import { CellTypes } from '../cell';
import {
  MoveCellAction,
  DeleteCellAction,
  InsertCellBeforeAction,
  UpdateCellAction,
  BundleStartAction,
  DirectionTypes,
    } from "../actions";


const deleteCell = (id: string):
    DeleteCellAction => {
        return {
            type: ActionType.DELETE_CELL,
            payload: id
        }
    };

const updateCell = (id: string, content: string):
    UpdateCellAction => {
    return {
    type: ActionType.UPDATE_CELL,
    payload: {
        id,
        content
    }}
};

const moveCell = (id: string, direction: DirectionTypes):
    MoveCellAction => {
    return {
    type: ActionType.MOVE_CELL,
    payload: {
        id,
        direction
    }}
};

const insertCellBefore = (id: string | null, type: CellTypes):
    InsertCellBeforeAction => {
    return {
    type: ActionType.INSERT_CELL_BEFORE,
    payload: {
        id,
        type
    }}
};

const bundleCell = (id: string):
    BundleStartAction => {
    return {
    type: ActionType.BUNDLE_START,
    payload: {
        id
    }}
};


export {
    deleteCell,
    updateCell,
    moveCell,
    insertCellBefore,
    bundleCell
}