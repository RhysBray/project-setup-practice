import * as React from "react";
import styles from "./counter.module.scss";

export interface IProps {
  addToScore: number;
}

export interface IState {}

class Counter extends React.Component<IProps, IState> {
  public render() {
    return <p className={styles.counter}>{this.props.addToScore}</p>;
  }
}

export default Counter;
