// OptionsMenu test

import React from "react"
import { render, screen } from "@testing-library/react"
import OptionsMenu from "."

const TARGET_MESSAGE = "Hello World"
it(`Renders "${TARGET_MESSAGE}"`, () => {
	render(<OptionsMenu />)
	expect(screen.getByText(TARGET_MESSAGE)).toBeInTheDocument()
})

