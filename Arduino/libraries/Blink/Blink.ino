void setup()
{
  pinMode(13, OUTPUT);
}

void loop()
{
  digitalWrite(13, HIGH);
  delay(150); // Wait for 150 millisecond(s)
  digitalWrite(13, LOW);
  delay(300); // Wait for 300 millisecond(s)
}
