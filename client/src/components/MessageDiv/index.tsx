import {
	StyledMsgBox,
	StyledMsgDiv,
	StyledMsgTxt,
	StyledNameTxt,
} from './styled-msgDiv';

type props = {
	data: {
		msg: string;
		from: string;
	};
	user: string;
};

const MessageDiv = ({ data, user }: props) => {
	return (
		<StyledMsgDiv isReverse={data.from.trim() !== user}>
			<StyledNameTxt>{data.from}</StyledNameTxt>
			<StyledMsgBox>
				<StyledMsgTxt>{data.msg}</StyledMsgTxt>
			</StyledMsgBox>
		</StyledMsgDiv>
	);
};

export default MessageDiv;
