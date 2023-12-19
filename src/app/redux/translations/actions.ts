import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import translationService from "./service";
import { RootState } from "app/redux/store";
import translationSlice from "./slice";

const translationActions = translationSlice.actions;

export const keywordsList = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch, getState) => {
    const response = await translationService.keywordsList();
    dispatch(translationActions.keywordsList(response));
  };
};

export const languagesList = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch, getState) => {
    const response = await translationService.languagesList();
    dispatch(translationActions.languagesList(response));
  };
};
export const addKeyword = (values: any): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch, getState) => {
    //first save keyword
    dispatch(translationActions.saveSuccess(false));
    try {
      const response = await translationService.saveKeyword(values.keyword);
      //then save translation
      // iterate rest values except keyword
      for (const [key, translation] of Object.entries(values)) {
        const language = getState().translations.languages?.find(
          (language) => language.language === key
        );
        console.log(`${key}: ${translation}`);
        if (translation !== "" && language) {
          //find language id
          await translationService.saveTranslation(response.id, language.id, translation);
        }
      }
    } catch (e) {
    } finally {
      dispatch(translationActions.saveSuccess(true));
      dispatch(keywordsList());
    }
  };
};
export const editKeyword = (values: any): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch, getState) => {
    //first save keyword
    dispatch(translationActions.saveSuccess(false));
    try {
      const response = await translationService.updateKeyword(values.id, values.keyword);
      //then save translation
      // iterate rest values except keyword
      for (const [key, translation] of Object.entries(values)) {
        const language = getState().translations.languages?.find(
          (language) => language.language === key
        );
        console.log(`${key}: ${translation}`);
        if (translation !== "" && language) {
          //find language id
          await translationService.saveTranslation(response.id, language.id, translation);
        }
      }
    } catch (e) {
    } finally {
      dispatch(translationActions.saveSuccess(true));
      dispatch(keywordsList());
    }
  };
};
