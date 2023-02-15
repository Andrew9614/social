import { MessageData } from "../../../../redux/type";

export type MessageProps = {
  message: MessageData;
  self: boolean;
  temp: boolean | null;
	viewed: boolean;
	deleteMessage: (is: string) => void;
};
