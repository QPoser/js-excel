import {defaultStyles, defaultTitle} from '@/constants';
import {clone} from '@core/utils';

const defaultState = {
  title: defaultTitle,
  rowState: {},
  colState: {},
  dataState: {},
  currentText: '',
  currentStyles: defaultStyles,
  stylesState: {},
  openedDate: new Date().toJSON(),
};

const normalize = (state) => ({
  ...defaultState,
  ...state,
  currentStyles: defaultStyles,
  currentText: '',
})

export function normalizeInitialState(state) {
  return state ? normalize(state) : clone(defaultState);
}
