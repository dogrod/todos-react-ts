// Reference from https://github.com/ant-design/ant-design/blob/master/components/_util/type.ts
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

export default Omit
