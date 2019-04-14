import * as React from "react";
import styles from "./rofl.module.scss";
import { NavLink } from "react-router-dom";

export interface IProps {}

export interface IState {}

class Rofl extends React.Component<IProps, IState> {
  public render() {
    return (
      <NavLink to="/lol">
        <main className={styles.Rofl}>
          <p>ROFL! :D</p>
        </main>
      </NavLink>
    );
  }
}

export default Rofl;
