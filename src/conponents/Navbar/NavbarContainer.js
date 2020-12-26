import Navbar from "./Navbar";
import React from 'react'
import { connect } from "react-redux";


const mapStateToProps = (state)=> ({id: state.auth.id})

const NavbarContainer = props => <Navbar {...props} />

export default connect(mapStateToProps, {})(NavbarContainer)