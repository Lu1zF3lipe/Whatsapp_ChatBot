import { MessageContextService } from "../../services/message/message-context-service";
import { MessageStepEnum } from "../../enums/message-step-enum";
import { FirstStepMessage } from "../../services/message/stepsFlow/first-step";
import { UserNameStep } from "../../services/message/stepsFlow/username-step";
import { UserCpfStep } from "../../services/message/stepsFlow/cpf-step";
import { UserCepStep } from "../../services/message/stepsFlow/cep-step";
import { OptionsStep } from "../../services/message/stepsFlow/options-step";
import { CommandOptionsStep } from "../../services/message/stepsFlow/command-options-step";

MessageContextService.listen(
  MessageStepEnum.FIRST_MESSAGE_STEP,
  FirstStepMessage.handle
);

MessageContextService.listen(
  MessageStepEnum.USERNAME_STEP,
  UserNameStep.handle
);

MessageContextService.listen(
  MessageStepEnum.CPF_STEP, 
  UserCpfStep.handle);

MessageContextService.listen(
  MessageStepEnum.CEP_STEP, 
  UserCepStep.handle);

MessageContextService.listen(
  MessageStepEnum.OPTIONS_STEP,
  OptionsStep.handle
);

MessageContextService.listen(
  MessageStepEnum.COMMAND_OPTION_STEP,
  CommandOptionsStep.handle
);
