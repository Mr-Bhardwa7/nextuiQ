import type { Meta, StoryObj } from '@storybook/react'
import { MultiStep } from './MultiStep'
import { Label } from '@/components/form-elements/label'
import { Input } from '@/components/form-elements/input'
import { Card } from '@/components/ui/card'

const meta: Meta<typeof MultiStep> = {
  title: 'Components/ui/MultiStep',
  component: MultiStep,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
}

export default meta
type Story = StoryObj<typeof MultiStep>

interface StepProps {
  data: Record<string, any>
  updateData: (data: Record<string, any>) => void
}

const PersonalStep: React.FC<StepProps> = ({ data, updateData }) => (
  <div className="space-y-4">
    <input
      type="text"
      value={data.name || ''}
      onChange={(e) => updateData({ name: e.target.value })}
      className="w-full rounded-md border p-2"
      placeholder="Enter your name"
    />
  </div>
)

const AccountStep: React.FC<StepProps> = ({ data, updateData }) => (
  <div className="space-y-4">
    <input
      type="email"
      value={data.email || ''}
      onChange={(e) => updateData({ email: e.target.value })}
      className="w-full rounded-md border p-2"
      placeholder="Enter your email"
    />
  </div>
)

const ReviewStep: React.FC<StepProps> = ({ data }) => (
  <div className="space-y-4">
    <div>Name: {data.name}</div>
    <div>Email: {data.email}</div>
  </div>
)

export const Basic: Story = {
  render: () => (
    <div className="w-[600px]">
      <MultiStep
        steps={[
          {
            id: 'personal',
            title: 'Personal',
            content: <PersonalStep data={{}} updateData={() => {}} />,
            validation: (data) => !!data.name
          },
          {
            id: 'account',
            title: 'Account',
            content: <AccountStep data={{}} updateData={() => {}} />,
            validation: (data) => !!data.email
          },
          {
            id: 'review',
            title: 'Review',
            content: <ReviewStep data={{}} updateData={() => {}} />
          }
        ]}
        onComplete={(data) => console.log('Form completed:', data)}
        autoSave
      />
    </div>
  )
}

// Add after the Basic story
export const CheckoutForm: Story = {
  render: () => {
    const ShippingStep: React.FC<StepProps> = ({ data, updateData }) => (
      <Card className="p-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              defaultValue={data.fullName || ''}
              onChange={(e) => updateData({ fullName: e.target.value })}
              placeholder="John Doe"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Shipping Address</Label>
            <Input
              id="address"
              defaultValue={data.address || ''}
              onChange={(e) => updateData({ address: e.target.value })}
              placeholder="123 Main St"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                defaultValue={data.city || ''}
                onChange={(e) => updateData({ city: e.target.value })}
                placeholder="New York"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="zipCode">ZIP Code</Label>
              <Input
                id="zipCode"
                defaultValue={data.zipCode || ''}
                onChange={(e) => updateData({ zipCode: e.target.value })}
                placeholder="10001"
              />
            </div>
          </div>
        </div>
      </Card>
    )

    const PaymentStep: React.FC<StepProps> = ({ data, updateData }) => (
      <Card className="p-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="cardNumber">Card Number</Label>
            <Input
              id="cardNumber"
              defaultValue={data.cardNumber || ''}
              onChange={(e) => updateData({ cardNumber: e.target.value })}
              placeholder="4111 1111 1111 1111"
              maxLength={16}
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2 col-span-2">
              <Label htmlFor="expiry">Expiry Date</Label>
              <Input
                id="expiry"
                defaultValue={data.expiry || ''}
                onChange={(e) => updateData({ expiry: e.target.value })}
                placeholder="MM/YY"
                maxLength={5}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cvv">CVV</Label>
              <Input
                id="cvv"
                defaultValue={data.cvv || ''}
                onChange={(e) => updateData({ cvv: e.target.value })}
                placeholder="123"
                type="password"
                maxLength={4}
              />
            </div>
          </div>
        </div>
      </Card>
    )

    const ConfirmationStep: React.FC<StepProps> = ({ data }) => (
      <Card className="p-6">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
            <div className="space-y-4">
              <div className="bg-[oklch(var(--theme-muted))] p-4 rounded-lg">
                <h4 className="font-medium mb-2">Shipping Details</h4>
                <p className="text-[oklch(var(--theme-muted-foreground))]">{data.fullName}</p>
                <p className="text-[oklch(var(--theme-muted-foreground))]">{data.address}</p>
                <p className="text-[oklch(var(--theme-muted-foreground))]">{data.city}, {data.zipCode}</p>
              </div>
              <div className="bg-[oklch(var(--theme-muted))] p-4 rounded-lg">
                <h4 className="font-medium mb-2">Payment Information</h4>
                <p className="text-[oklch(var(--theme-muted-foreground))]">
                  Card ending in {data.cardNumber?.slice(-4)}
                </p>
                <p className="text-[oklch(var(--theme-muted-foreground))]">
                  Expires: {data.expiry}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    )

    return (
      <div className="w-[600px]">
        <MultiStep
          steps={[
            {
              id: 'shipping',
              title: 'Shipping',
              content: <ShippingStep data={{}} updateData={() => {}} />,
              validation: (data) => !!data.fullName && !!data.address && !!data.city && !!data.zipCode
            },
            {
              id: 'payment',
              title: 'Payment',
              content: <PaymentStep data={{}} updateData={() => {}} />,
              validation: (data) => !!data.cardNumber && !!data.expiry && !!data.cvv
            },
            {
              id: 'confirmation',
              title: 'Confirm',
              content: <ConfirmationStep data={{}} updateData={() => {}} />
            }
          ]}
          onComplete={(data) => console.log('Order completed:', data)}
          autoSave
        />
      </div>
    )
  }
}

export const VerticalSteps: Story = {
  render: () => {
    const StepOne: React.FC<StepProps> = ({ data, updateData }) => (
      <Card className="p-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Account Information</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                value={data.username || ''}
                onChange={(e) => updateData({ username: e.target.value })}
                placeholder="Choose a username"
                autoComplete="username"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={data.email || ''}
                onChange={(e) => updateData({ email: e.target.value })}
                placeholder="Enter your email"
                autoComplete="email"
              />
            </div>
          </div>
        </div>
      </Card>
    )

    const StepTwo: React.FC<StepProps> = ({ data, updateData }) => (
      <Card className="p-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Profile Details</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                value={data.fullName || ''}
                onChange={(e) => updateData({ fullName: e.target.value })}
                placeholder="Enter your full name"
                autoComplete="name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Input
                id="bio"
                value={data.bio || ''}
                onChange={(e) => updateData({ bio: e.target.value })}
                placeholder="Tell us about yourself"
              />
            </div>
          </div>
        </div>
      </Card>
    )

    const StepThree: React.FC<StepProps> = ({ data, updateData }) => (
      <Card className="p-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Preferences</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="theme">Theme</Label>
              <Input
                id="theme"
                value={data.theme || ''}
                onChange={(e) => updateData({ theme: e.target.value })}
                placeholder="Light or Dark"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="language">Language</Label>
              <Input
                id="language"
                value={data.language || ''}
                onChange={(e) => updateData({ language: e.target.value })}
                placeholder="Choose your language"
              />
            </div>
          </div>
        </div>
      </Card>
    )

    const FinalStep: React.FC<StepProps> = ({ data }) => (
      <Card className="p-6">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Review Your Information</h2>
          <div className="space-y-4">
            <div className="bg-[oklch(var(--theme-muted))] p-4 rounded-lg">
              <h4 className="font-medium mb-2">Account Details</h4>
              <p className="text-[oklch(var(--theme-muted-foreground))]">Username: {data.username}</p>
              <p className="text-[oklch(var(--theme-muted-foreground))]">Email: {data.email}</p>
            </div>
            <div className="bg-[oklch(var(--theme-muted))] p-4 rounded-lg">
              <h4 className="font-medium mb-2">Profile</h4>
              <p className="text-[oklch(var(--theme-muted-foreground))]">Name: {data.fullName}</p>
              <p className="text-[oklch(var(--theme-muted-foreground))]">Bio: {data.bio}</p>
            </div>
            <div className="bg-[oklch(var(--theme-muted))] p-4 rounded-lg">
              <h4 className="font-medium mb-2">Settings</h4>
              <p className="text-[oklch(var(--theme-muted-foreground))]">Theme: {data.theme}</p>
              <p className="text-[oklch(var(--theme-muted-foreground))]">Language: {data.language}</p>
            </div>
          </div>
        </div>
      </Card>
    )

    return (
      <div className="w-[1000px] flex gap-8">
        <div className="w-[240px] shrink-0">
          <Card className="p-4 sticky top-4">
            <div className="space-y-4">
              <div className="space-y-1">
                <h3 className="font-medium">Setup Progress</h3>
                <p className="text-sm text-[oklch(var(--theme-muted-foreground))]">
                  Complete all steps to finish setup
                </p>
              </div>
              <div className="border-t border-[oklch(var(--theme-border))] my-4" />
              <nav className="space-y-2">
                {['Account', 'Profile', 'Preferences', 'Review'].map((step, index) => (
                  <div
                    key={step}
                    className={`flex items-center gap-3 text-sm p-2 rounded-md transition-colors
                      ${index === 1 ? 'bg-[oklch(var(--theme-muted))]' : 'hover:bg-[oklch(var(--theme-muted))]'}`}
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs
                      ${index === 1 
                        ? 'bg-[oklch(var(--theme-primary))] text-[oklch(var(--theme-primary-foreground))]' 
                        : index < 1
                          ? 'bg-[oklch(var(--theme-success))] text-[oklch(var(--theme-success-foreground))]'
                          : 'bg-[oklch(var(--theme-muted))] text-[oklch(var(--theme-muted-foreground))]'
                      }`}
                    >
                      {index + 1}
                    </div>
                    <span className={index === 1 ? 'font-medium' : ''}>
                      {step}
                    </span>
                  </div>
                ))}
              </nav>
            </div>
          </Card>
        </div>
        <div className="flex-1">
          <MultiStep
            steps={[
              {
                id: 'account',
                title: 'Account',
                content: <StepOne data={{}} updateData={() => {}} />,
                validation: (data) => !!data.username && !!data.email
              },
              {
                id: 'profile',
                title: 'Profile',
                content: <StepTwo data={{}} updateData={() => {}} />,
                validation: (data) => !!data.fullName
              },
              {
                id: 'preferences',
                title: 'Preferences',
                content: <StepThree data={{}} updateData={() => {}} />,
                validation: (data) => !!data.theme && !!data.language
              },
              {
                id: 'review',
                title: 'Review',
                content: <FinalStep data={{}} updateData={() => {}} />
              }
            ]}
            onComplete={(data) => console.log('Setup completed:', data)}
            autoSave
          />
        </div>
      </div>
    )
  }
}