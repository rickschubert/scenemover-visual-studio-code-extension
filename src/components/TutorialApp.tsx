import React, {CSSProperties} from 'react'
import {FC, useMemo} from 'react'
import { Board } from './Board'
import { Game } from './Game'

const containerStyle: CSSProperties = {
    width: 500,
    height: 500,
    border: '1px solid gray',
  }

export const TutorialApp: FC = () => {
    const game = useMemo(() => new Game(), [])

    return (
      <div style={containerStyle}>
        <Board game={game} />
      </div>
    )
  }
