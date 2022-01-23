import Select from "./SelectBox/SelectBox";

export const SelectBox = Select;


export interface IAtoms {
  /**
   * 이름
   */
  name?: string;

  /**
   * 자식 Type
   */
  children?: React.ReactNode;

  /**
   * 너비
   */
  defaultSize?: 'small' | 'medium' | 'large' | 'full';

  /**
   * 데이터
   */
  list?: { name: string; value: string }[];

  /**
   * display Block 여부 (기본 inline)
   */
  block?: Boolean;

  /**
   * 기본 선택 값
   */
  defaultValue?: string;

  /**
   * 선택불가처리
   */
  disabled?: Boolean;

  /**
   * 부가 설명
   */
  description?: string[];
}
