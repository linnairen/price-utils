import { CurrencySymbol } from './currency'

/**
 * 一些关于金额的工具
 */
namespace Price {
  /**
   * 格式化金额，默认保留两位小数
   * @param price 金额
   * @param CCY 货币符号
   * @returns 格式化后的字符串
   */
  export const Format = (price: number, CCY: CurrencySymbol = CurrencySymbol.CNY) => {
    return !isNaN(price) && isFinite(price) ? `${CCY} ${String(Number(price.toFixed(2))).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` : String(price)
  }
}

export default Price
