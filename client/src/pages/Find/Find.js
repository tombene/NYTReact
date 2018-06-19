import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class App extends Component {
	state = {
		articles: [],
		articleSearch: "",
		beginDate: "",
		endDate: ""
	};

	handleInputChange = event => {
		// Destructure the name and value properties off of event.target
		// Update the appropriate state
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = event => {
		// When the form is submitted, prevent its default behavior, get articles update the articles state
		event.preventDefault();
		const params = {
			search: this.state.articleSearch,
			beginDate: this.state.beginDate,
			endDate: this.state.endDate
		}
		API.searchArticles(params)
			.then(res => {
				console.log(res.data);
				this.setState({ articles: res.data });
			})
			.catch(err => console.log(err));
	};

	render() {
		return (
			<div>
				<Container fluid>
					<Row>
						<Col size="md-12">
							<Jumbotron>
								<h1>New York Times Article Scrubber</h1>
								<h2>Search for and annotate articles of interest!</h2>
							</Jumbotron>
							<form>
								<Input
									name="articleSearch"
									value={this.state.articleSearch}
									onChange={this.handleInputChange}
									placeholder="Search For an NYTimes Article (Required)"
								/>
								<Input
									name="beginDate"
									value={this.state.beginDate}
									onChange={this.handleInputChange}
									placeholder="Start Year"
								/>
								<Input
									name="endDate"
									value={this.state.endDate}
									onChange={this.handleInputChange}
									placeholder="End Year"
								/>

								<FormBtn
									onClick={this.handleFormSubmit}
									type="success"
									className="input-lg"
								>
									Search
                      </FormBtn>
							</form>
						</Col>
					</Row>
					<Row>
						<Col size="xs-12">
							<Jumbotron>
								<h1>Article Results For {this.state.articleSearch}</h1>
							</Jumbotron>
							{this.state.articles.length ? (
								<List>
									{this.state.articles.map(article => (
										<ListItem key={article._id}>
											
												<strong>
													{article.title} published {article.date}
												</strong>
											
										</ListItem>
									))}
								</List>
							) : (
									<h3>No Results to Display</h3>
								)}

						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default App;
