package ru.paf.highload.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;

import javax.annotation.Generated;
import javax.validation.constraints.NotNull;
import java.util.Objects;

/**
 * DialogMessage
 */

@Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2025-03-06T15:13:16.556718+03:00[Europe/Moscow]", comments = "Generator version: 7.10.0")
public class DialogMessage {

  private String from;

  private String to;

  private String text;

  public DialogMessage() {
    super();
  }

  /**
   * Constructor with only required parameters
   */
  public DialogMessage(String from, String to, String text) {
    this.from = from;
    this.to = to;
    this.text = text;
  }

  public DialogMessage from(String from) {
    this.from = from;
    return this;
  }

  /**
   * Идентификатор пользователя
   * @return from
   */
  @NotNull
  @Schema(name = "from", description = "Идентификатор пользователя", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("from")
  public String getFrom() {
    return from;
  }

  public void setFrom(String from) {
    this.from = from;
  }

  public DialogMessage to(String to) {
    this.to = to;
    return this;
  }

  /**
   * Идентификатор пользователя
   * @return to
   */
  @NotNull
  @Schema(name = "to", description = "Идентификатор пользователя", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("to")
  public String getTo() {
    return to;
  }

  public void setTo(String to) {
    this.to = to;
  }

  public DialogMessage text(String text) {
    this.text = text;
    return this;
  }

  /**
   * Текст сообщения
   * @return text
   */
  @NotNull
  @Schema(name = "text", example = "Привет, как дела?", description = "Текст сообщения", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("text")
  public String getText() {
    return text;
  }

  public void setText(String text) {
    this.text = text;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    DialogMessage dialogMessage = (DialogMessage) o;
    return Objects.equals(this.from, dialogMessage.from) &&
        Objects.equals(this.to, dialogMessage.to) &&
        Objects.equals(this.text, dialogMessage.text);
  }

  @Override
  public int hashCode() {
    return Objects.hash(from, to, text);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class DialogMessage {\n");
    sb.append("    from: ").append(toIndentedString(from)).append("\n");
    sb.append("    to: ").append(toIndentedString(to)).append("\n");
    sb.append("    text: ").append(toIndentedString(text)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
}

