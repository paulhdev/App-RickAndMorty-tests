import {StackNavigationProps} from './index';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends StackNavigationProps {}
  }
}
