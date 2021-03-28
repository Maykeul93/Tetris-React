import React from 'react';
import {StyledCell} from './styles/StyledCell';
import {TETROMINUS} from '../tetrominus';

const Cell = ({type}) => (
    <StyledCell
    type={'L'}
    color={TETROMINUS['L'].color}
    >
        cell
    </StyledCell>
);

export default Cell;
