import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template';
import {$} from '@core/dom';
import {resizeHandler} from '@/components/table/table.resize';
import {shouldResize} from '@/components/table/table.functions';

export class Table extends ExcelComponent {
  static className = 'excel__table';

  constructor($root) {
    super($root, {
      listeners: ['mousedown'],
    })
  }

  toHTML() {
    return createTable(100);
  }

  // onClick() {
  //   console.log('click');
  // }
  //
  onMousedown(event) {
    // console.log(event.target.getAttribute('data-resize'));
    if (shouldResize(event)) {
      resizeHandler(this.$root, event);
    }
  }
  //
  // onMousemove() {
  //   console.log('ms move');
  // }
  //
  // onMouseup() {
  //   console.log('ms up');
  // }
}
