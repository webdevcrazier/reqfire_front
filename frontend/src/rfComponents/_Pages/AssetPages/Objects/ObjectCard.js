// TODO: Do not show Object table if there are no properties | AjH
	// instead, it should read something like "Click to add properties"
import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';

import { Div } from 'glamorous';
import { SectionBlock, SectionCentring, SectionDetails } from "../../../_Molecules/Section";
import { Card } from "../../../_Molecules/Card/Card";
import { LabelHeading, LabelHint } from "../../../_Molecules/Labels/LabelHint";
import Icon from "../../../_Molecules/Icons";
import { Cell } from "../../../_Molecules/Table/Cell";
import { Row } from "../../../_Molecules/Table/Row";
import { Table } from "../../../_Molecules/Table/Table";
import { _Palette } from "../../../_Utils/Colours";



@observer	
class ObjectCard extends Component {
	static propTypes = {
		data: PropTypes.object,
	}

	render() {
		const {data} = this.props;
		
		//let formArray = [];
		
		const objectHeader = (
			<Row header>
						<Cell columnWidth="10%">#</Cell>
						<Cell columnWidth="45%">Name</Cell>
						<Cell columnWidth="45%">Description</Cell>
			</Row>
		);
		
		const objectData = data.children.map((obj) => {
			console.log(obj.name);
			return(
				<Row>
					<Cell columnWidth="10%">{obj.text2}</Cell>
					<Cell columnWidth="45%">{obj.name}</Cell>
					<Cell columnWidth="45%">{obj.text}</Cell>
				</Row>
			)
			})
		
		
		return (
			<Div display="flex" marginBottom="16px" marginTop="8px">
				<SectionCentring>
					<SectionDetails>
						<SectionBlock>
							<LabelHint>24/05/17</LabelHint>
							<LabelHint>R-1234</LabelHint>
						</SectionBlock>
					</SectionDetails>
				</SectionCentring>
				<Card 
					// -- Reduce border radius
					// small

					// -- Set shadow level between 0-4 
					// -- 0: border, 1: subtle, 2: floating element, 
					// -- 3: raised, 4: modal
					// shadowLevel="0"

					// -- Set either translucent or white 
					// translucent
					// white

					// -- Helper to set display = "flex"
					// makeFlex

					width="560px"

					// -- Note: set internal margin with SectionBlock or similiar
				>
					<SectionBlock>
						<Div display="flex">
							<SectionBlock>
								<LabelHeading colorScheme="Orange">OB: {data.name}</LabelHeading>
							</SectionBlock>
							<Div marginLeft="auto" display="flex" alignItems="center" height="100%">
								<SectionBlock>
									<Icon
										color={_Palette.TextFaint}
										defaultColor={_Palette.TextFaint}
										// activeColor={_Palette.Orange}
										// hoverColor={_Palette.TextWeak}
										// isHover={this.state.hovered}
										// isActive={this.state.active} 
										iconName="np_delete"
										size={"SMALL"}
									/>
								</SectionBlock>
								<SectionBlock>
									<Icon
										color={_Palette.TextFaint}
										defaultColor={_Palette.TextFaint}
										// activeColor={_Palette.Orange}
										// hoverColor={_Palette.TextWeak}
										// isHover={this.state.hovered}
										// isActive={this.state.active} 
										iconName="np_edit"
										size={"SMALL"}
									/>
								</SectionBlock>
							</Div>
						</Div>
					</SectionBlock>
					<SectionBlock>
						<Card 
							shadowLevel="0"
							translucent
						>
							<SectionBlock>
				<Table>
					{objectHeader}
			
					{objectData}
				</Table>
							</SectionBlock>
						</Card>
					</SectionBlock>
				</Card>
				<SectionCentring>
					<SectionDetails>
						
					</SectionDetails>
				</SectionCentring>
			</Div>
		);
	}
}

export default ObjectCard;

				// <p>Description: {this.props.data.text}</p>

//<Card>
//		<p>Name: {this.props.data.name}</p>
//		<p>Description: {this.props.data.text}</p>
//		{
//			formProperties
//		}
//	</Card>