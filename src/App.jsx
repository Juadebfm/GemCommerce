import './App.css'
import foodImage from './assets/food_2.png'
import googlePayLogo from './assets/googlepay.png'
import madeFreshIcon from './assets/made_fresh.png'
import mastercardLogo from './assets/mastercard.png'
import applePayLogo from './assets/pay.png'
import paypalLogo from './assets/paypal.png'
import premiumIcon from './assets/prenium.png'
import realFoodIcon from './assets/real_food.png'
import shieldIcon from './assets/Action/shield-check.png'
import vetIcon from './assets/vet.png'
import visaLogo from './assets/visa.png'
import dogEatImage from './assets/dog_eat.jpg'
import dogEatFoodImage from './assets/dog_eat_food.jpg'
import dogLickImage from './assets/dog_lick.jpg'

const featureGroups = {
  left: [
    {
      title: 'Real Food',
      description: 'Wholesome recipes for dogs with real meat and veggies.',
      tone: 'green',
      icon: realFoodIcon,
    },
    {
      title: 'Premium Ingredient',
      description: 'Elevating pet care with unmatched safety and quality.',
      tone: 'sand',
      icon: premiumIcon,
    },
  ],
  right: [
    {
      title: 'Made Fresh',
      description: 'We prioritize maintaining the integrity of whole foods and nutrition.',
      tone: 'mint',
      icon: madeFreshIcon,
    },
    {
      title: 'Vet Developed',
      description: 'We raise the bar for dog nutrition, surpassing industry expectations.',
      tone: 'peach',
      icon: vetIcon,
    },
  ],
}

const paymentMethods = [
  { name: 'PayPal', logo: paypalLogo, className: 'payment-paypal' },
  { name: 'VISA', logo: visaLogo, className: 'payment-visa' },
  { name: 'Mastercard', logo: mastercardLogo, className: 'payment-mastercard' },
  { name: 'Apple Pay', logo: applePayLogo, className: 'payment-applepay' },
  { name: 'Google Pay', logo: googlePayLogo, className: 'payment-googlepay' },
]

const keyPoints = [
  {
    value: '97%',
    description:
      'Dogs choose our dog food over leading brands because of its real functional ingredients and delicious flavor.',
  },
  {
    value: '84%',
    description:
      'Our dog food provides superior nutrition and a patented probiotic for optimal nutrient absorption.',
  },
  {
    value: '92%',
    description:
      "Our dog food's high protein and fat digestibility contribute to ideal stool quality.",
  },
]

const finalSectionRows = [
  {
    id: 'gut-health',
    title: 'Improve overall gastrointestinal health for better nutrient absorption',
    description:
      "Through rigorous scientific studies and consultations with veterinarians, we have created a breakthrough formula exclusively tailored to combat the health challenges prevalent in dogs. A staggering 91% of our customers have reported significant improvements in their dogs' health after incorporating our product into their diet.",
    image: dogEatImage,
    imageAlt: 'Two dogs eating from bowls with a Happy Dog Bites pack in the background',
    imagePosition: 'left',
  },
  {
    id: 'prebiotics',
    title: 'Prebiotics nourish the beneficial gut bacteria, supporting digestive health',
    description:
      'Our dog food formula contains carefully selected prebiotics that work in harmony with the gut microbiota, providing the necessary nutrients for the growth and maintenance of beneficial bacteria, ultimately supporting digestive health.',
    image: dogEatFoodImage,
    imageAlt: 'Close-up texture of dry dog food pellets',
    imagePosition: 'right',
  },
]

function FeatureItem({ feature }) {
  return (
    <article className="feature-item">
      <div className={`feature-icon feature-icon-${feature.tone}`}>
        <img src={feature.icon} alt="" />
      </div>
      <div>
        <h3>{feature.title}</h3>
        <p>{feature.description}</p>
      </div>
    </article>
  )
}

function App() {
  return (
    <main className="page-content">
      <section className="difference-wrapper">
        <header className="difference-heading">
          <h1>
            What makes us different
            <br />
            makes them stronger
          </h1>
        </header>

        <div className="difference-layout">
          <div className="feature-column">
            {featureGroups.left.map((feature) => (
              <FeatureItem feature={feature} key={feature.title} />
            ))}
          </div>

          <div className="hero-media" aria-label="Product comparison bowl graphic">
            <img
              className="bowl-image"
              src={foodImage}
              alt="Bowl of dog food"
              width="370"
              height="370"
              decoding="async"
              fetchPriority="high"
            />
          </div>

          <div className="feature-column">
            {featureGroups.right.map((feature) => (
              <FeatureItem feature={feature} key={feature.title} />
            ))}
          </div>
        </div>

        <div className="difference-cta">
          <a className="cta-button" href="#shop">
            Get your dog&apos;s healthy meal today!
          </a>

          <div className="trust-row">
            <div className="guarantee">
              <img className="shield-icon" src={shieldIcon} alt="" />
              <span>30-day money back guarantee</span>
            </div>

            <div className="payment-list" aria-label="Accepted payment methods">
              {paymentMethods.map((method) => (
                <span className={`payment-badge ${method.className}`} key={method.name}>
                  <img src={method.logo} alt={method.name} />
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="nutrition-section">
        <div className="nutrition-wrapper">
          <div className="nutrition-copy">
            <h2 className="nutrition-title">
              Nutrition is the foundation for longer, healthier lives in dogs.
            </h2>

            <p className="nutrition-description">
              Invest in your dog&apos;s future with our scientifically formulated
              superfood-powered supplements. Give them the nutrition they deserve and
              watch them thrive with vitality, energy, and the joy of a longer,
              healthier life.
            </p>

            <div className="key-points-block">
              <h3 className="key-points-title">Key Points:</h3>

              <div className="key-points-list">
                {keyPoints.map((point) => (
                  <article className="key-point-row" key={point.value}>
                    <p className="key-point-value">{point.value}</p>
                    <p className="key-point-text">{point.description}</p>
                  </article>
                ))}
              </div>
            </div>

            <a className="nutrition-cta" href="#shop">
              Give your furry friend the gift of wholesome nutrition
            </a>
          </div>

          <div className="nutrition-visual">
            <div className="nutrition-image-frame">
              <img
                className="nutrition-image"
                src={dogLickImage}
                alt="Dog beside a bag of Happy Dog Bites"
                width="570"
                height="570"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="benefits-wrapper">
          {finalSectionRows.map((row) => (
            <div
              className={`benefit-row benefit-row-${row.imagePosition}`}
              key={row.id}
            >
              <div className="benefit-image-frame">
                <img
                  className="benefit-image"
                  src={row.image}
                  alt={row.imageAlt}
                  width="570"
                  height="480"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="benefit-copy">
                <h2 className="benefit-title">{row.title}</h2>
                <p className="benefit-description">{row.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
