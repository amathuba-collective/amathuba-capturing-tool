{
	/* <Grid.Container gap={2}>
						<Grid xs={4}>
							<Card
								isPressable
								isHoverable
								variant='bordered'
								css={{ mw: "400px" }}>
								<Card.Body>
									<Text>Youth 1</Text>
								</Card.Body>
							</Card>
						</Grid>
						<Grid xs={4}>
							<Card
								isPressable
								isHoverable
								variant='bordered'
								css={{ mw: "400px" }}>
								<Card.Body>
									<Text>Youth 2</Text>
								</Card.Body>
							</Card>
						</Grid>
						<Grid xs={4}>
							<Card
								isPressable
								isHoverable
								variant='bordered'
								css={{ mw: "400px" }}>
								<Card.Body>
									<Text>Youth 3</Text>
								</Card.Body>
							</Card>
						</Grid>
						<Grid xs={4}>
							<Card
								isPressable
								isHoverable
								variant='bordered'
								css={{ mw: "400px" }}>
								<Card.Body>
									<Text>Youth 3</Text>
								</Card.Body>
							</Card>
						</Grid>
						<Grid xs={4}>
							<Card
								isPressable
								isHoverable
								variant='bordered'
								css={{ mw: "400px" }}>
								<Card.Body>
									<Text>Youth 3</Text>
								</Card.Body>
							</Card>
						</Grid>
						<Grid xs={4}>
							<Card
								isPressable
								isHoverable
								variant='bordered'
								css={{ mw: "400px" }}>
								<Card.Body>
									<Text>Youth 3</Text>
								</Card.Body>
							</Card>
						</Grid>
					</Grid.Container> */
}

{
	/* <Grid.Container className='d-flex'>
                        <Grid className='d-flex align-items-center'>
                            {/* <Text className='mt-2 mb-1 fw-bold fs-5'>Ronnie Hand</Text> 
                    <Avatar
                        src={YouthProfileImage}
                        css={{ size: "8rem" }}
                        className='mt-4'
                        bordered
                    />
					{/* </Grid>
                    </Grid.Container> */
}
{
	/* current Status section */
}

{
	youthBasicInformation.map((youthsInformation) => {
		return (
			<>
				<p className='fs-3 fw-bold mt-5'>{youthsInformation}</p>

				<div className='mt-4'>
					<button className='wellBeingBtn fs-5' onClick={openWellBiengForm}>
						<span>
							<i className='fa-solid fa-phone fs-5'></i>
						</span>{" "}
						Call Friend
					</button>
				</div>

				<div className=' mt-4 fs-5 d-flex align-items-center'>
					<p className='statusTitle opacity-75'>Current Status :</p>
					<span className='alert alert-success mx-3'>
						<span>
							<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABVUlEQVRIie3Vv0sCYRzH8fdzDXpT2h9QEm4iLW1G0K8h/4kEhaYW6d+IIgokdAhpci8wawq3oEGbFKT+Ahs0jOe+DR0NgXfec7bdZzw+9319n2e4gyhRoswpKkh5tV3IiuiSQu0gpNwJA6ClkGo/V+/MFU7fHsWcxeEpcAhYU2oaURU7OSp3M41JaNhF74CtWZYEHu3EeN8Pn7b9b5zEx1kAFGD7c2if+JU8T7zaLmQR54UZFvwTbYla621cd6cVPAeK6JIBCrDgWE7Rq+A5VClr1wD9iag9YxiRZWMYVsxhkBCw57vesFLvIeA3c1jkPgTcNIYVUgW0AaotrWvGcD9X7yCqElQV5LK3efNqDAPYyVEZeAigtpZi9rFfzRfuZhoTOzHOK8UF3teuBTlPxuP55/WrL7+5gX6L6aeDjGM5RffjkHIfD4CmpXXN73qjRInyL/kGAZRroZ6LN6IAAAAASUVORK5CYII=' />
						</span>
						Well Being
					</span>
				</div>

				<div className='informationContent mt-4'>
					<h3 className='fs-4'>Basic Information</h3>
					<div className='row'>
						<div className='col-12 w-75'>
							{/*  */}
							<div className='col-12 d-flex align-items-center mb-4 mt-4'>
								<div className='col-5'>
									<div>
										<p className='mt-3 fw-bold'>First & Last Name</p>
									</div>
								</div>
								<div className='col-7 mx-1'>
									<div class='row'>
										<div class='col'>
											<input
												type='text'
												class='form-control p-2 bg-light'
												placeholder={youthsInformation}
												disabled
												readonly
											/>
										</div>
										<div class='col'>
											<input
												type='text'
												class='form-control p-2 bg-light'
												placeholder={youthsInformation}
												disabled
												readonly
											/>
										</div>
									</div>
								</div>
							</div>

							<div className='col-12 d-flex align-items-center mb-4'>
								<div className='col-5'>
									<p className='mt-3 fw-bold'>Gender</p>
								</div>
								<div className='col-7 mx-1'>
									<div class='col-12'>
										<input
											type='text'
											class='form-control p-2 bg-light'
											placeholder={youthsInformation}
											disabled
											readonly
										/>
									</div>
								</div>
							</div>

							<div className='col-12 d-flex align-items-center mb-4'>
								<div className='col-5'>
									<p className='mt-3 fw-bold'>Code Number</p>
								</div>
								<div className='col-7 mx-1'>
									<div class='col-12'>
										<input
											type='text'
											class='form-control p-2 bg-light'
											placeholder={youthsInformation}
											disabled
											readonly
										/>
									</div>
								</div>
							</div>

							<div className='col-12 d-flex align-items-center mb-4'>
								<div className='col-5'>
									<p className='mt-3 fw-bold'>Phone Number</p>
								</div>
								<div className='col-7 mx-1'>
									<div class='col-12'>
										<input
											type='text'
											class='form-control p-2 bg-light'
											placeholder={youthsInformation}
											disabled
											readonly
										/>
									</div>
								</div>
							</div>
							{/*  */}
							{/*  */}
							<div className='col-12 d-flex align-items-center mb-4'>
								<div className='col-5'>
									<p className='mt-3 fw-bold'>City</p>
								</div>
								<div className='col-7 mx-1'>
									<div class='col-12'>
										<input
											type='text'
											class='form-control p-2 bg-light'
											id='inputAddress'
											placeholder={youthsInformation}
											disabled
											readonly
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	});
}
