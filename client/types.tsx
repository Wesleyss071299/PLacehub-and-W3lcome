export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Add: undefined;
};

export type HomeTabParamList = {
  HomeScreen: undefined;
  UpdateScreen: undefined;
};

export type AddTabParamList = {
  AddScreen: undefined;
};

export type Person = {
  _id: string,
  name: string,
  email: string,
  pictureUrl: string
}

export type ResponsePerson = {
  data: Person[]
}
