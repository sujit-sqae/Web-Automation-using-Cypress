class obj {

    homepageURL='https://automationexercise.com/'
    loginURL='https://automationexercise.com/login'
    signupURL='https://automationexercise.com/signup'
    accountCreatedURL='https://automationexercise.com/account_created'
    kidsDrrssPageURL='https://automationexercise.com/category_products/4'
    productDetailPageURL='https://automationexercise.com/product_details/22'
    cartPageURL='https://automationexercise.com/view_cart'
    checkoutPageURL='https://automationexercise.com/checkout'
    paymentPageURL='https://automationexercise.com/payment'
    paymentDoneURL='https://automationexercise.com/payment_done/1600'

    signUp='.shop-menu > .nav > :nth-child(4) > a'
    inputUsername='.signup-form input:nth-child(2)'
    inputEmail='.signup-form input:nth-child(3)'
    signupButton='.btn:nth-child(5)'

    selectGender='#id_gender1'
    inputPassword='#password'
    dateSelection_DOB='[data-qa="days"]'
    monthSelection_DOB='[data-qa="months"]'
    yearSelection_DOB='[data-qa="years"]'
    inputFirstname='#first_name'
    inputLastname='#last_name'
    inputCompany='#company'
    inputAddress='#address1'
    selectCountry='[data-qa="country"]'
    inputState='#state'
    inputCity='#city'
    inputZipcode='#zipcode'
    inputMobileNumber='#mobile_number'
    createAccountButton='.btn:nth-child(22)'

    textCongratulations='.col-sm-9 > :nth-child(2)'
    continueButton='[data-qa="continue-button"]'
    expandKidsCategory=':nth-child(3) > .panel-heading > .panel-title > a > .badge > .fa'
    expandDress='#Kids > .panel-body > ul > :nth-child(1) > a'
    viewProduct=':nth-child(7) > .product-image-wrapper > .choose > .nav > li > a'

    addToCart=':nth-child(5) > .btn'
    viewCart='u'
    proceedToCheckout='.col-sm-6 > .btn'
    placeOrder=':nth-child(7) > .btn'


    inputNameOnCard='.form-row:nth-child(2) .form-control'
    inputCardNumber='.card-number'
    inputCVC='.card-cvc'
    inputExpirationMonth='.card-expiry-month'
    inputExpirationYear='.card-expiry-year'
    payAndConfirmOrder='[data-qa="pay-button"]'

    texttCongrats='.col-sm-9 > p'
    downloadInovoice='.col-sm-9 > .btn-default'
    deleteAccount=':nth-child(5) > a'
    ContinueDeleteAccount='[data-qa="continue-button"]'

    registerORlogin='.modal-body > :nth-child(2) > a > u'
    cart='.shop-menu > .nav > :nth-child(3) > a'
    
  }

  export default new obj();