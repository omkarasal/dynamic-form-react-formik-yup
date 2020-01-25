import React, { Component, Fragment } from 'react';
import { Formik, Field } from 'formik';
import { Form, Button } from 'react-bootstrap';
import './App.css';

class DynamicForm extends Component {
    renderCheckBox(input) {
        return (
            <Form.Group key={input.name}>
                <Form.Label>{input.label}</Form.Label>
                <Field
                    name={input.name}>
                    {(props) => {
                        const { field } = props;
                        const { errors, touched } = props.form;
                        return (
                            <Form.Check
                                name={input.name}
                                type="checkbox"
                                checked={field.value}
                                onChange={field.onChange}
                                isInvalid={errors[input.name] && touched[input.name]}
                                feedback={errors[input.name]} />
                        );
                    }}
                </Field>
            </Form.Group>
        );
    }

    renderTextArea(input) {
        return (
            <Form.Group key={input.name}>
                <Form.Label>{input.label}</Form.Label>
                <Field
                    name={input.name}>
                    {(props) => {
                        const { field } = props;
                        const { errors, touched } = props.form;
                        return (
                            <Fragment>
                                <Form.Control
                                    as="textarea"
                                    {...field}
                                    isInvalid={errors[input.name] && touched[input.name]} />
                                <Form.Control.Feedback type="invalid">
                                    {errors[input.name] && touched[input.name] ? errors[input.name] : ''}
                                </Form.Control.Feedback>
                            </Fragment>
                        );
                    }}
                </Field>
            </Form.Group>
        );
    }

    renderSelect(input) {
        return (
            <Form.Group key={input.name}>
                <Form.Label>{input.label}</Form.Label>
                <Field
                    name={input.name}>
                    {(props) => {
                        const { field } = props;
                        const { errors, touched } = props.form;
                        const defaultOption = <option key='default' value='Please Select'>Please Select</option>;
                        const options = input.data.map(i => <option key={i} value={i}> {i} </option>);
                        const selectOptions = [defaultOption, ...options];
                        return (
                            <Fragment>
                                <Form.Control
                                    as='select'
                                    {...field}
                                    value={field.value}
                                    isInvalid={errors[input.name] && touched[input.name]}>
                                    {
                                        selectOptions
                                    }
                                </Form.Control>
                                <Form.Control.Feedback type="invalid">
                                    {errors[input.name] && touched[input.name] ? errors[input.name] : ''}
                                </Form.Control.Feedback>
                            </Fragment>
                        );
                    }}
                </Field>
            </Form.Group>
        );
    }
    renderFields(inputs) {
        return inputs.map(input => {
            if (input.type === 'select') {
                return this.renderSelect(input);
            }
            if (input.type === 'checkbox') {
                return this.renderCheckBox(input);
            }
            if (input.type === 'textarea') {
                return this.renderTextArea(input);
            }
            return (
                <Form.Group key={input.name}>
                    <Form.Label>{input.label}</Form.Label>
                    <Field
                        name={input.name}>
                        {(props) => {
                            const { field } = props;
                            const { errors, touched } = props.form;
                            return (
                                <Fragment>
                                    <Form.Control
                                        {...field}
                                        type='text'
                                        isInvalid={errors[input.name] && touched[input.name]} />
                                    <Form.Control.Feedback type="invalid">
                                        {errors[input.name] && touched[input.name] ? errors[input.name] : ''}
                                    </Form.Control.Feedback>
                                </Fragment>
                            );
                        }}
                    </Field>
                </Form.Group>
            );
        })
    }
    getInitialValues(inputs) {
        const initialValues = {};
        inputs.forEach(field => {
            if (!initialValues[field.name]) {
                initialValues[field.name] = field.value;
            }
        });
        return initialValues;
    }
    render() {
        const initialValues = this.getInitialValues(this.props.fields);
        return (
            <div className="app">
                <h1>Dynamic Form</h1>
                <Formik
                    onSubmit={(values) => { console.log(values) }}
                    validationSchema={this.props.validations}
                    initialValues={initialValues}>
                    {(form) => {
                        return <div>
                            <Form onSubmit={form.handleSubmit}>
                                {
                                    this.renderFields(this.props.fields)
                                }
                                <Button variant="primary" type="submit">Submit</Button>
                            </Form>
                        </div>
                    }}
                </Formik>
            </div>
        );
    }
}
export default DynamicForm;