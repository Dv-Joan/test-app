import React, { Component } from 'react';

export default class UseState_class extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 20 };
  }

  render() {
    return (
      <div>
        <div className='border-dashed border-2 border-violet-600 rounded-xl py-2 px-2 my-2 w-4/5 '>
          <div className='text-white font-Roboto  tracking-wider text-xl py-4 px-2 '>
            <div className='px-3 text-center'>
              " Se realizó un chekeo a su cuenta y actualmente en su cuenta
              tiene abonado cierta cantidad de dinero correspondiente a
              <span class='inline-flex items-baseline'>
                <span className='bg-violet-600 font-bold rounded w-auto text-center px-2 mx-2 '>
                  {this.state.count}$
                </span>
              </span>
              , medida en dólares estadounidenses "
            </div>
          </div>
        </div>
        <div className='items-center'>
          <button
            className=' bg-slate-800 border-solid border-2 border-white py-2 px-5 mt-4 ml-1 items-center text-center rounded-full drop-shadow-lg  text-xl cursor-pointer hover:bg-white hover:text-slate-800 active:bg-violet-600 '
            onClick={() => this.setState({ count: this.state.count + 100 })}
          >
            Get Money
          </button>
        </div>
      </div>
    );
  }
}
