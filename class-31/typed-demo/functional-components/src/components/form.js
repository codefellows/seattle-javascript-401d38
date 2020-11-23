import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function BootStrapForm() {

  return (
    <Form>
      <Form.Group as={Row}>
        <Form.Label column="true" sm="3">Age</Form.Label>
        <Col sm="8">
          <Form.Control type="text" placeholder="Enter your age" />
        </Col>
        <Col sm="1">
          <Form.Text className="text-muted">
            How old are you?
          </Form.Text>
        </Col>
      </Form.Group>

      <Form.Group as={Row} >
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Password" />
        </Col>
      </Form.Group>
    </Form>
  )
}

export default BootStrapForm;
