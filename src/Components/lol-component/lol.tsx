import * as React from "react";
import styles from "./lol.module.scss";
import { NavLink } from "react-router-dom";

export interface IProps {}

export interface IState {}

class Lol extends React.Component<IProps, IState> {
  public render() {
    return (
      <NavLink to="/rofl">
        <main className={styles.lol}>
          <p>LOL! :P</p>
        </main>
      </NavLink>
    );
  }
}

export default Lol;
