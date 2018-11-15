import View from '../lib/View';
export class Button extends View {
  constructor(emitter, dispatcher) {
    super(dispatcher);
    const button = document.querySelector('.view-stub__apply');
    const input = document.querySelector('.view-stub__input');
    button.addEventListener('click', ()=> {
      const value = input.value;
      dispatcher.dispatch({
        type: 'set_name',
        name: value,
      });
    });
  }
  _setData(data) {}
  _redraw() {}
}
