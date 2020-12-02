# Warm Up - Redux Reducers with Actions

- In pairs, create a redux `reducer` with an default `Initial State` that is just an object literal: `{}`
  - Export the Reducer so it can used with a redux store.
- Also create a set of `actions` that will allow components to do the following:
  - Change the current state of your store to a `payload` passed in as an argument.
  - Add a new property and value to the state of your store, which comes in as the `payload` for the action.
  - Delete a property on your stores state, the property to delete will be passed in as a `payload` for the action.

If your `reducer` and `actions` are formatted properly we should be able to configure your reducer like so:

```javascript
// store/configure-store.js

import YourReducer from './path/to/your/reducer';

cosnt reducers = combineReducers({
  ...,
  YourReducerName: YourReducer,
  ...,
});

```

We should also be able to use your `actions` and look at data from your `store` in our component logic like so:

```javascript

// React component File

import { yourAddAction, yourChangeAction, yourDeleteAction } from './path/to/your/actions';
// NOTE: you do not need to give your actions these exact names, we only need to import them from your action file.

...

function handleAdd(thingToAdd) {

  props.addAction(thingToAdd);

}

...

const mapStateToProps = state => ({
  data: state.YourReducerName,
})

const mapDispatchToProps = {
  addAction: yourAddAction,
  changeAction: yourChangeAction,
  deleteAction: yourDeleteAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);

```
