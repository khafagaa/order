import {Text, View} from 'react-native';
import React, {Component} from 'react';

type prop = {name: string};
export default class Child extends Component {
  constructor(props: prop) {
    super(props);
    this.state = {
      name: 10 || null,
      age: 20,
    };
  }
  static getDerivedStateFromProps(props: prop, state: prop) {
    console.log(`in get derived ${props.name}`);
    if (props.name !== state.name) {
      return {
        name: props.name,
      };
    }
    return null; // No change to state
  }

  shouldComponentUpdate(
    nextProps: Readonly<{}>,
    nextState: Readonly<{}>,
    nextContext: any,
  ): boolean {
    console.log(`in should `);
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(
      `in snap ${JSON.stringify(prevProps)}  and ${JSON.stringify(prevState)}`,
    );
    return 0.0111;
  }
  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<{}>,
    snapshot?: any,
  ): void {
    console.log(
      `in did ${JSON.stringify(prevProps)}  and ${JSON.stringify(
        prevState,
      )} finally ${snapshot}`,
    );
  }

  render() {
    return (
      <View>
        <Text>My name is {this.state.name}</Text>
        <Text>My age is {this.state.age}</Text>
      </View>
    );
  }
}
