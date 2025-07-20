const ERROR_MESSAGES = {
  400: "Invalid request. Please check your input.",
  401: "Unauthorized. Please check your email or credentials.",
  402: "Payment required. Please update your billing information.",
  403: "Access denied. You do not have permission to perform this action.",
  404: "Service not found. Please try again later.",
  409: "Conflict detected. The request could not be completed due to a conflict.",
  422: "Validation error. Please check your input.",
  429: "Too many requests. Please try again later.",
  500: "An unexpected error occurred. Please try again later.",
  503: "Service is temporarily unavailable. Please try again later.",
};

const DEFAULT_ERROR_MESSAGE = "An unexpected error occurred. Please try again.";

export default function getErrorMessage(status) {
  return ERROR_MESSAGES[status] || DEFAULT_ERROR_MESSAGE;
}
