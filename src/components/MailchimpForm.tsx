import MailchimpSubscribe from 'react-mailchimp-subscribe'
import { Newsletter } from './Newsletter'

export function MailchimpForm() {
  return (
    <>
      <MailchimpSubscribe
        url={''}
        render={({ subscribe, status, message }) => (
          <Newsletter
            status={status}
            message={message}
            onValidated={(formData: any) => subscribe(formData)}
          />
        )}
      />
    </>
  )
}
