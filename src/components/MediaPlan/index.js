import { useState } from 'react';
import InputComponent from "../Input";
import CheckboxComponent from "../Checkbox";
import {
	Container,
	TwoColumns,
	Table,
	ButtonContainer,
	Button,
	TableContainer
} from './styles';

export default function MediaPlan() {
	const [budget, setBudget] = useState({sea: 0, display: 0, social: 0, affliate: 0, remarketing: 0});

	const handleCurrencyChange = (e, name) => {
		const t = e.value;
		e.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
		setBudget({...budget, [name]: e.value});
	}

	return (
		<Container>
			<form>
				<InputComponent type="text" id="media-plain" label="Media Plan" noMargin={false} />
				<TwoColumns>
					<InputComponent type="date" id="start-date" label="Start Date" noMargin={false} />
					<InputComponent type="date" id="end-date" label="End Date" noMargin={false} />
				</TwoColumns>
				<TableContainer>
					<Table>
						<>
							<colgroup>
								<col span="1" />
								<col span="1" />
								<col span="1" />
								<col span="1" />
							</colgroup>
							<thead>
								<tr>
									<th align="left">Channel</th>
									<th align="left">Budget</th>
									<th>Keep consistent</th>
									<th>Exclude</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>SEA</td>
									<td><InputComponent 
										type="number" 
										id="currency-sea" 
										noMargin={true} 
										min="0"
										max="1000"
										step=".01"
										name="sea"
										value={budget.sea}
										handleCurrencyChange={handleCurrencyChange}
										/>
									</td>
									<td><CheckboxComponent type="radio" id="sea1" name="sea" value="1"/></td>
									<td><CheckboxComponent type="radio" id="sea2" name="sea" value="2"/></td>
								</tr>
								<tr>
									<td>Display</td>
									<td><InputComponent 
										type="number" 
										id="currency-display" 
										noMargin={true} 
										min="0"
										max="1000"
										step=".01"
										name="display"
										value={budget.display}
										handleCurrencyChange={handleCurrencyChange}
										/>
									</td>
									<td><CheckboxComponent type="radio" id="display1" name="display" value="1"/></td>
									<td><CheckboxComponent type="radio" id="display2" name="display" value="2"/></td>
								</tr>
								<tr>
									<td>Social</td>
									<td><InputComponent 
										type="number" 
										id="currency-social" 
										noMargin={true} 
										min="0"
										max="1000"
										step=".01"
										name="social"
										value={budget.social}
										handleCurrencyChange={handleCurrencyChange}
										/>
									</td>
									<td><CheckboxComponent type="radio" id="social1" name="social" value="1"/></td>
									<td><CheckboxComponent type="radio" id="social2" name="social" value="2"/></td>
								</tr>
								<tr>
									<td>Affliate</td>
									<td><InputComponent 
										type="number" 
										id="currency-affliate" 
										noMargin={true} 
										min="0"
										max="1000"
										step=".01"
										name="affliate"
										value={budget.affliate}
										handleCurrencyChange={handleCurrencyChange}
										/>
									</td>
									<td><CheckboxComponent type="radio" id="affliate1" name="affliate" value="1"/></td>
									<td><CheckboxComponent type="radio" id="affliate2" name="affliate" value="2"/></td>
								</tr>
								<tr>
									<td>Remarketing</td>
									<td><InputComponent 
										type="number" 
										id="currency-remarketing" 
										noMargin={true} 
										min="0"
										max="1000"
										step=".01"
										name="remarketing"
										value={budget.remarketing}
										handleCurrencyChange={handleCurrencyChange}
										/>
									</td>
									<td><CheckboxComponent type="radio" id="remarketing1" name="remarketing" value="1"/></td>
									<td><CheckboxComponent type="radio" id="remarketing2" name="remarketing" value="2"/></td>
								</tr>
								<tr>
									<td>Total</td>
									<td>{+budget.sea + +budget.display + +budget.social + +budget.affliate + +budget.remarketing}</td>
								</tr>
							</tbody>
						</>
					</Table>
				</TableContainer>
				<ButtonContainer>
					<Button type="submit">Copy Plan</Button>
					<Button type="submit">Save Plan</Button>
				</ButtonContainer>
			</form>
		</Container>
	)
};
