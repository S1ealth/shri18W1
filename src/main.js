import EventEmitter from '../lib/EventEmitter';
import Dispatcher from '../lib/Dispatcher';
import Store from '../lib/Store';
import {Label} from './Label';
import {Button} from './Button';
import reduce from './Reducer';
export default class App {
  constructor() {
    this._globalEmitter = new EventEmitter();
    this._dispatcher = new Dispatcher();
    // new ServerApi(this._globalEmitter, this._dispatcher);
    this._initViews();
    this._initStore();
  }
  _initViews() {
    new Label(this._globalEmitter, this._dispatcher);
    new Button(this._globalEmitter, this._dispatcher);
  }
  _initStore() {
    const defaultStore = {
      name: '',
      serverName: '',
      events: [],
    };
    this._store = new Store(defaultStore, reduce, this._dispatcher, this._globalEmitter);
  }
}
const app = new App();
