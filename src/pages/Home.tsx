import React, { useState } from 'react';
import './Home.css';
import { Button, Col, Container, Row, Form, Badge, FormText } from 'react-bootstrap';
import Select from 'react-select';
import { RiArrowRightCircleLine } from 'react-icons/ri';
import 'bootstrap/dist/css/bootstrap.min.css';
interface Props {}

export const Home: React.FC<Props> = ({}) => {
	const options = [
		{ value: 'Upvotes', label: 'Upvotes' },
		{ value: 'no of Deals', label: 'no of Deals' },
		{ value: 'Contract Value', label: 'Contract Value' },
		{ value: 'Product roadmap', label: 'Product roadmap' },
		{ value: 'Effort', label: 'Effort' }
	];
	const CataData = [
		{
			catagory: 'Integrations / Shopify',
			subCatagory: 'Shopify',
			catagoryName: 'Multi Variant',
			upvotes: 312,
			deals: 8,
			totalCost: 50,
			roadmap: '2022 Q2',
			effort: 'Months'
		},
		{
			catagory: 'UX-UI',
			catagoryName: 'New Buttons',
			upvotes: 270,
			deals: 8,
			totalCost: 100,
			roadmap: '2022 Q1',
			effort: 'Months'
		},
		{
			catagory: 'Features',
			catagoryName: 'Order Overview',
			upvotes: 210,
			deals: 5,
			totalCost: 50,
			roadmap: 'Shipped',
			effort: ''
		},
		{
			catagory: 'Integrations',
			catagoryName: 'Otto Marketplace',
			upvotes: 200,
			deals: 4,
			totalCost: 40,
			roadmap: 'Unplanned',
			effort: 'Input Needed'
		}
	];

	const Data = [
		{
			integrations: 'Shopify',
			features: 'Order Management',
			uxui: 'Onboarding lane',
			competitors: 'A'
		},
		{
			integrations: 'Amazon',
			features: 'Inventory',
			uxui: 'Navigation',
			competitors: 'B'
		},
		{
			integrations: 'Zalando',
			features: '3PL Connector',
			uxui: 'Zolando',
			competitors: 'C'
		},
		{
			integrations: 'Magento',
			features: 'Payments',
			uxui: 'Magento',
			competitors: 'X'
		}
	];
	return (
		<div className="main-home-container">
			<Container>
				<Row>
					<Col className="new-request-btn-container ">
						<Button variant="primary">
							<RiArrowRightCircleLine className="request-icon" />New Request
						</Button>{' '}
					</Col>
				</Row>
				<Row>
					<Col>
						<Form.Control
							type="text"
							id="inputPassword5"
							aria-describedby="passwordHelpBlock"
							placeholder="Search"
							className="search-bar"
						/>
					</Col>
				</Row>
				<Row className="justify-content-between">
					<Col>
						<div className="header-text">Popular Tags</div>
						<div className="badge-text">
							<Badge pill bg="secondary">
								Competitor: X
							</Badge>{' '}
							<Badge pill bg="secondary">
								Time Sensitive
							</Badge>{' '}
						</div>
					</Col>
				</Row>
				<Row className="justify-content-between">
					<Col>
						<div className="catagory-text">By Catagory</div>
						<Row>
							<Col xs={3}>
								<div className="header-text">Integrations</div>
							</Col>
							<Col xs={3}>
								<div className="header-text">Features</div>
							</Col>
							<Col xs={3}>
								<div className="header-text">UX-UI</div>
							</Col>
							<Col xs={3}>
								<div className="header-text">Competitors</div>
							</Col>
						</Row>
						{Data.map((data, id) => {
							return (
								<Row key={id}>
									<Col xs={3}>
										<div className="data-values">{data.integrations}</div>
									</Col>
									<Col xs={3}>
										<div className="data-values">{data.features}</div>
									</Col>
									<Col xs={3}>
										<div className="data-values">{data.uxui}</div>
									</Col>
									<Col xs={3}>
										<div className="data-values">{data.competitors}</div>
									</Col>
								</Row>
							);
						})}
						<Row className="catagory-text">
							<Col xs={3} md={3}>
								<div className="header-text">Top Sales Related To Board</div>
							</Col>
							<Col xs={4} md={3}>
								<div className="select-text">
									<Select options={options} />
								</div>
							</Col>
							<Col xs={3} md={3}>
								<div className="header-text ">Roadmap</div>
							</Col>
							<Col xs={2} md={3}>
								<div className="header-text">Efforts</div>
							</Col>
						</Row>
						{CataData.map((data, id) => {
							return (
								<Row key={id} className="justify-content-between efforts-container">
									<Col xs={5} md={6}>
										<div className="data-values">
											{data.catagory}/{data.catagoryName}
										</div>
										<div className="data-values">
											{data.upvotes} Upvotes, {data.deals} Deals, ${data.totalCost}k{' '}
										</div>
									</Col>
									<Col xs={2} md={2}>
										<div className="data-values">
											{' '}
											{data.roadmap === 'Shipped' ? (
												<Button variant="" className="shipped">
													Shiped
												</Button>
											) : (
												<div>{data.roadmap}</div>
											)}
										</div>
									</Col>
									<Col xs={2} md={2}>
										<div className="data-values" style={{ textAlign: 'center' }}>
											{data.effort}
										</div>
									</Col>
									<Col xs={2} md={1} className="new-request-btn-container ">
										<div className="data-values">
											<Button variant="primary">Upvotes</Button>{' '}
										</div>
									</Col>
								</Row>
							);
						})}
					</Col>
				</Row>

				<Row className="justify-content-between recent-updates-container">
					<Col>
						<div className="catagory-text">Recent Updates</div>
						<Row className="justify-content-between">
							<Col xs={12}>
								<div className="data-values-recent">Berber upvoted xxx</div>
								<div className="data-values-recent">
									VP Product added talking points to Integrations / Shopify / Multi Variant{' '}
									<span className="slack-btn-container">
										<Button variant="" className="slack-btn">
											From Slack
										</Button>{' '}
									</span>{' '}
								</div>
								<div className="data-values-recent">
									VP Product updated Roadmap for Integrations / Shopify / Multi Variant
								</div>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
