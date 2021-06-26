import React from 'react'

import classes from './styles.module.css'

console.log(classes)

export const ButtonRed = () => {
  return (
    <button
      className={classes.button}
    >
      ButtonRed
    </button>
  )
}

export default ButtonRed
