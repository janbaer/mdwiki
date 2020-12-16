// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "@keyframes ShowDialog {\n  from {\n    transform: translateX(20%) scale(0.7);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0) scale(1);\n    opacity: 1;\n  }\n}\n.Animated-Dialog {\n  animation: ShowDialog 0.3s ease-in-out;\n}\n.ModalDialog-backgroundContainer {\n  display: flex;\n  align-items: center;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 100vw;\n  height: 100vh;\n  background-color: grey;\n  z-index: 2;\n  opacity: 0.98;\n}\n@media (min-width: 768px) {\n  .ModalDialog-backgroundContainer {\n    opacity: 0.9;\n  }\n}\n.ModalDialog-dialog {\n  width: 80%;\n  max-width: 640px;\n  display: flex;\n  flex-direction: column;\n  color: grey;\n  background-color: white;\n  padding: 1em;\n  margin: auto;\n  animation: ShowDialog 0.3s ease-in-out;\n}\n.ModalDialog-descriptionLabel {\n  margin-bottom: 10px;\n}\n.ModalDialog-dialogContainer {\n  margin-top: 10px;\n  padding-top: 10px;\n  display: flex;\n  justify-content: flex-end;\n}\n.ModalDialog-dialogContainer .button {\n  width: 120px;\n}\n.ModalDialog-dialogContainer .button:first-of-type {\n  margin-right: 10px;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}