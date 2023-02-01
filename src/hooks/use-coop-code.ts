import { useTypedSelector } from "./use-typed-selector";

export const useCoopCode = (cellId: string) => {

     return useTypedSelector((state) => {
       const { data, order } = state.cells;
       const coopCells = order.map((id) => data[id]);

       const showFunc =
         // This is the code that will be executed in the browser
         `
      import _React from 'react';
      import _ReactDOM from 'react-dom';

      var show = (value) => {
        const root = document.querySelector('#root');

        if (typeof value === 'object') {
          if (value.$$typeof && value.props) {
            _ReactDOM.render(value, root)
          } else {
            root.innerHTML = JSON.stringify(value);
          }
        } else {
           root.innerHTML = value;
        }
      }
      `;

       const showFuncNoOp = "var show = () => {}";

       const coopCode = [];
       for (let c of coopCells) {
         if (c.type === "code") {
           if (c.id === cellId) {
             coopCode.push(showFunc);
           } else {
             coopCode.push(showFuncNoOp);
           }
           coopCode.push(c.content);
         }
         if (c.id === cellId) {
           break;
         }
       }
       return coopCode;
     }).join("\n");
}