import React, { Component, PropsWithChildren } from 'react';
import { SyntheticInputEvent, SyntheticChangeEvent } from '../lib/SyntheticEvents';

export interface TextInputProps {
  placeholder?: string
  placeholderColor?: string
  maxlength?: number
  readonly?: boolean
  onChange?: (value: string) => void
  onInput?: (value: string) => void
}

type TextInputState = {
}

export class TextInput extends Component<PropsWithChildren<TextInputProps | any>, TextInputState> {
  constructor(props: PropsWithChildren<TextInputProps | any>) {
    super(props);

    this._onChange = this._onChange.bind(this);
    this._onInput = this._onInput.bind(this);

    console.log(props.placeholderColor);

    this.state = {
    };
  }

  _onInput(e: SyntheticInputEvent) {
    this.props.onInput(e.value);
  }

  _onChange(e: SyntheticChangeEvent) {
    this.props.onChange(e.value);
  }

  render() {
    return React.createElement('TextInput', Object.assign({}, this.props, {
      onChange: (e: SyntheticChangeEvent) => { this._onChange(e) },
      onInput: (e: SyntheticInputEvent) => { this._onInput(e) }
    }), this.props.children);
  }
};