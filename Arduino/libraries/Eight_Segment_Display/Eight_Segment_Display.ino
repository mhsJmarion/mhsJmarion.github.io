void setup()
{
pinMode(7, OUTPUT);
pinMode(6, OUTPUT);
pinMode(5, OUTPUT);
pinMode(4, OUTPUT);
pinMode(3, OUTPUT);
pinMode(2, OUTPUT);
}

void loop()
{
digitalWrite(7, HIGH);
digitalWrite(4, HIGH);
digitalWrite(3, HIGH);
delay(450); // Wait for 450 millisecond(s)
digitalWrite(7, LOW);
digitalWrite(6, HIGH);
digitalWrite(5, HIGH);
digitalWrite(4, LOW);
digitalWrite(3, LOW);
digitalWrite(2, HIGH);
delay(600); // Wait for 600 millisecond(s)
digitalWrite(6, LOW);
digitalWrite(5, LOW);
digitalWrite(2, LOW);
delay(300); // Wait for 300 millisecond(s)
}
