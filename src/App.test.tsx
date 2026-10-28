import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders the header', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { level: 1, name: /Hello Pages/i }),
    ).toBeInTheDocument()
  })

  it('renders the about section', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { level: 2, name: /О проекте/i }),
    ).toBeInTheDocument()
    expect(screen.getAllByText(/GitHub Pages/i).length).toBeGreaterThan(0)
  })

  it('renders every project in the list', () => {
    render(<App />)

    expect(screen.getByText('Go CLI')).toBeInTheDocument()
    expect(screen.getByText('Go GUI')).toBeInTheDocument()
    expect(screen.getByText('Hello Pages')).toBeInTheDocument()
  })

  it('renders the deployment footer', () => {
    render(<App />)

    expect(screen.getByText(/Deployed with/i)).toBeInTheDocument()
  })
})
