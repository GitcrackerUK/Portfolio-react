import styled, { css } from 'styled-components';
import Button from '@material-ui/core/Button';

export const StButton = styled(Button)`
    ${(p) => {
        if (p.player === 'X' && p.id === 'X') {
            return css`
                color: white !important;
            `;
        }
        if (p.player === 'O' && p.id === 'O') {
            return css`
                color: white !important;
            `;
        }
    }};
    margin: 10px 10px !important;
    width: 80px;
    background: #575a5f47 !important;
    font-size: 16px !important;
    :active {
        border: none !important;
        background-color: #a1cae2 !important;
    }

    ${(p) => {
        return p.header
            ? css`
                  width: 200px;
              `
            : css``;
    }}

    ${(p) => {
        return p.cell
            ? css`
                  height: 100px;
                  width: 100px;
                  margin: 30px !important;
                  font-size: 40px;
                  color: white !important;
              `
            : css``;
    }}
`;
