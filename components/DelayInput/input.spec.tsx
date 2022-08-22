// eslint-disable-next-line import/named
import { screen, render, RenderResult, fireEvent } from '@testing-library/react'
import { DelayInput } from './input'

// DelayInputコンポーネントに関するテスト
describe('DelayInput', () => {
  let renderResult: RenderResult
  let handleChange: jest.Mock

  beforeEach(() => {
    // タイマーをjestのものに置き換える
    jest.useFakeTimers()

    // モック関数を作成する
    handleChange = jest.fn()

    // モック関数をDelayButtonに渡して、描画
    renderResult = render(<DelayInput onChange={handleChange} />)
  })

  afterEach(() => {
    renderResult.unmount()
    // タイマーを元に戻す
    jest.useFakeTimers()
  })

  // span要素のテキストが空であることをテスト
  it('should display empty in span on initial render', () => {
    const spanNode = screen.getByTestId('display-text') as HTMLSpanElement

    // 初期表示は空
    expect(spanNode).toHaveTextContent('入力したテキスト')
  })

  // 入力直後はspan要素が「入力中。。。」と表示するかテスト
  it('should display 「入力中...」immeiately after onChange event occurs', () => {
    const inputText = 'Test Input Text'
    const inputNode = screen.getByTestId('input-text') as HTMLInputElement

    // inputのonChangeイベントを呼び出す
    fireEvent.change(inputNode, { target: { value: inputText } })

    // act関数内で実行することにより、タイマーのコールバック中で起きる状態変更が反映されることを保証する
    await act(() => {
      jest.runAllTimers()
    })
    const spanNode = screen.getByTestId('display-text') as HTMLSpanElment

    // 入力したテキストが表示するか確認
    expect(spanNode).toHaveTextContent(`入力したテキスト: ${inputText}`)
  })
})
