export function ShowSpinner() {
  return function (Class: Function) {
    Object.defineProperty(Class.prototype, 'showSpinner', {
      value: true
    });
  }
}

export function HideSpinner(triggerAction: string) {
  return function (Class: Function) {
    Object.defineProperty(Class.prototype, 'triggerAction', {
      value: triggerAction
    });
  }
}

export function SuccessTip(tip: string) {
  return function (Class: Function) {
    Object.defineProperty(Class.prototype, 'successTip', {
      value: true
    });

    Object.defineProperty(Class.prototype, 'successMsg', {
      value: tip
    });
  }
}

export function ErrorTip() {
  return function (Class: Function) {
    Object.defineProperty(Class.prototype, 'errorTip', {
      value: true
    });
  }
}

export function NeedConfirm(question: string, action: string) {
  return function (Class: Function) {
    Object.defineProperty(Class.prototype, 'yesno', {
      value: false
    });

    Object.defineProperty(Class.prototype, 'confirmQuestion', {
      value: question
    });

    Object.defineProperty(Class.prototype, 'confirmAction', {
      value: action
    });
  }
}
