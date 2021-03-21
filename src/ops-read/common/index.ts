import { createSelector } from 'reselect';
import { AppState } from '../index';

export default createSelector((s: AppState) => s, s => s);
